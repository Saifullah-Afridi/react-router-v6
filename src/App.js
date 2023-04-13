import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/About";
import HelpLayout from "./pages/Layout/HelpLayout";
import Faq from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Careers, { careerLoader } from "./pages/Careers";
import CareerDetail, {
  CareerDetailLoder,
  CareerDetailError,
} from "./pages/CareerDetial";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="help/" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} action={contactAction} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="careers" element={<Careers />} loader={careerLoader}></Route>
      <Route
        path="careers/:id"
        element={<CareerDetail />}
        loader={CareerDetailLoder}
        errorElement={<CareerDetailError />}
      ></Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
