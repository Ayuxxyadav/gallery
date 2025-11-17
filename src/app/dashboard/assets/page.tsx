import UploadAsset from "@/components/dashboard/upload-asset";
import AssetGrid from "@/components/dashboard/asset-grid";
import { getCategoriesAction, getUserAssetsAction } from "@/actions/dashboard-actions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function UserAssetPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (session === null) return null;

  const [categories, assets] = await Promise.all([
    getCategoriesAction(),
    getUserAssetsAction(session?.user?.id)
  ]);

  // Transform assets to fix type mismatch (null -> undefined)
  const transformedAssets = (assets || []).map(asset => ({
    ...asset,
    description: asset.description || undefined, // Convert null to undefined
    thumbnailUrl: asset.thumbnailUrl || undefined, // Convert null to undefined
  }));

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">My Assets</h1>
        <UploadAsset categories={categories || []} />
      </div>
      <AssetGrid assets={transformedAssets} />
    </div>
  );
}
