

export default async function DetailPage({
  params }: {params : Promise<{ slug: string }> // catcjhing dynamic routes 
}) {
  const { slug } = await params;

console.log(slug);


  return (
    <div>
      <h1>My Prod : {slug}</h1>
   
    </div>
  );
}
