import { useState } from "react";
import Routes from "./constants/routs"
import Layout from "./Layout";
import AddRecipe from "./pages/AddRecipe";
import CookBook from "./pages/CookBook";
import Home from "./pages/Home";

function App() {

  const [page, setPage] = useState(Routes.HOME);

  return (
    <Layout 
    onChangePage={
     (rout) => setPage(rout) 
    }
    >
      {page===Routes.HOME && <Home/>}
      {page===Routes.ADD_RECIPE && <AddRecipe/>}
      {page===Routes.COOKBOOK && <CookBook/>}
    </Layout>
  );
}

export default App;
