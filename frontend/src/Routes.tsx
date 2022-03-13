import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserListPage } from "./components/UserPage/UserListPage";

export const RoutesManager: FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserListPage />}/>
      </Routes>
    </BrowserRouter>
  )
}