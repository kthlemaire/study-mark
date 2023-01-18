import { supabase } from "@/lib/supaBaseClient";

function Page({ countries }: any) {
  return (
    <ul>
      {countries.map((country: any) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("countries").select();

  return {
    props: {
      countries: data,
    },
  };
}

export default Page;
