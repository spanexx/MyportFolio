
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Button 
          onClick={() => navigate('/')}
          className="px-6"
          size="lg"
        >
          <Home className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
