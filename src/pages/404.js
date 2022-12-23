import { PageNotFound } from "../components/pageNotFound";
import { PageTitle } from "../components/PageTitle";

export default function NotFound(){
  return(
   <>
     <PageTitle title="Marvel | Página não encontrada" description="Página não encontrada" />
     <PageNotFound />
   </>
  )
}