import { useEffect } from "react";
import * as api from "../api-calls/api-get";
import { useParams } from "react-router-dom";

export default function Article() {
  const { article_id } = useParams();
  
  useEffect(() => {
    api.fetchArticlebyId(article_id).then((response)=>console.log(response))
  }, []);
}
