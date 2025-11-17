import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getAllUserPurchasedAction, getAllInvoicesAction } from "@/actions/payment-actions";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Image from "next/image";

interface Invoice {
  id: string;
  purchaseId: string;
  invoiceNumber: string;
  amount: number;
  status: string;
  createdAt: Date;
}

export default async function UserPurchasesPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session === null) return null;
  if (!session.user) redirect("/login");
  if (session?.user?.role === "admin") redirect("/");

  // Call both actions
  const [purchaseResult, invoicesResult] = await Promise.all([
    getAllUserPurchasedAction(),
    getAllInvoicesAction(),
  ]);

  // Type-safe data extraction
  const purchases = Array.isArray(purchaseResult) ? purchaseResult : [];
  const invoices: Invoice[] = invoicesResult?.success && Array.isArray(invoicesResult.invoices)
    ? invoicesResult.invoices
    : [];

  // Map purchaseId to invoiceId for quick lookup
  const purchaseToInvoiceMap = new Map<string, string>();
  invoices.forEach((inv: Invoice) => purchaseToInvoiceMap.set(inv.purchaseId, inv.id));

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-6">My Purchases</h1>

      {purchases.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">You haven't purchased any asset yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {purchases.map(({ purchase, asset }) => (
            <div
              key={purchase.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={asset.fileUrl}
                  alt={asset.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="font-medium truncate text-lg">{asset?.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Purchased: {new Date(purchase.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Price: ${(purchase.price / 100).toFixed(2)}
                </p>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <Button size="sm" asChild className="bg-black text-white hover:bg-gray-800">
                  <a href={`/api/download/${asset.id}`}>
                    <Download className="mr-2 w-4 h-4" />
                    Download
                  </a>
                </Button>

                {purchaseToInvoiceMap.has(purchase.id) && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`/api/invoice/${purchaseToInvoiceMap.get(purchase.id)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 w-4 h-4" />
                      Invoice
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
