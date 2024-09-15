import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/globals/TopBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./scenes/dashboard";
import Sidebar from "./scenes/globals/SideBar";

function App() {
  const [theme, colorMode] = useMode();
  console.log(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              <Route path="/contacts" element={<DashBoard />} />
              <Route path="/invoices" element={<DashBoard />} />
              <Route path="/form" element={<DashBoard />} />
              <Route path="/bar" element={<DashBoard />} />
              <Route path="/pie" element={<DashBoard />} />
              <Route path="/line" element={<DashBoard />} />
              <Route path="/faq" element={<DashBoard />} />
              <Route path="/geography" element={<DashBoard />} />
              <Route path="/calendar" element={<DashBoard />} />
            </Routes>
          </main>
        </div>
        {/* Your app components */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
