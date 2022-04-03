import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserListPage } from "./components/UserPage/UserListPage";
import { WorkflowListPage } from "./components/WorkflowPage/WorkflowListPage";

export const RoutesManager: FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserListPage />}/>
        <Route path="/workflow" element={<WorkflowListPage />} />
      </Routes>
    </BrowserRouter>
  )
}