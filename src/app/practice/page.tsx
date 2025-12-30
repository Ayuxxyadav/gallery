import Link from "next/link"


export default function  Product() {
    const product = [
        {
            id : 1 ,
            name : "mobile ",
            price : 5 ,
        },
            {
            id : 2 ,
            name : "mobile ",
            price : 5 ,
        },
                {
            id : 3 ,
            name : "mobile ",
            price : 5 ,
        }
    ]



    return (
        <div>
            {
                product.map((prod)=>(
                    <div key={prod.id}>
                     <div>{prod.name}</div>
                     <div>{prod.price}</div>
                     <Link href={`/practice/${prod.id}`}>
                     View detailss. and more
                     </Link>
                    </div>
                ))
            }
        </div>
    )
}