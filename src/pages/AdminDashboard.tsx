import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

type FarmerProfile = {
  id: string;
  location: string;
  farm_size: number;
  crops: string;
  experience: string;
  user: {
    full_name: string;
    email: string;
    phone: string;
  };
};

type BuyerProfile = {
  id: string;
  location: string;
  buying_interests: string;
  purchase_volume: number;
  user: {
    full_name: string;
    email: string;
    phone: string;
  };
};

async function fetchFarmers(): Promise<FarmerProfile[]> {
  const { data } = await supabase
    .from<FarmerProfile>("farmer_profiles")
    .select(`
      *,
      user:profiles (
        full_name,
        email,
        phone
      )
    `);
  return data || [];
}

async function fetchBuyers(): Promise<BuyerProfile[]> {
  const { data } = await supabase
    .from<BuyerProfile>("buyer_profiles")
    .select(`
      *,
      user:profiles (
        full_name,
        email,
        phone
      )
    `);
  return data || [];
}

export default function AdminDashboard() {
  const { data: farmers, isLoading: loadingFarmers } = useQuery({
    queryKey: ["farmers"],
    queryFn: fetchFarmers
  });
  const { data: buyers, isLoading: loadingBuyers } = useQuery({
    queryKey: ["buyers"],
    queryFn: fetchBuyers
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Farmers Card */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Registered Farmers</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingFarmers ? (
                <div>Loading...</div>
              ) : (
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Farm Size</TableHead>
                      <TableHead>Crops</TableHead>
                      <TableHead>Experience</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {farmers?.length ? farmers.map((f, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{f.user.full_name}</TableCell>
                        <TableCell>{f.user.email}</TableCell>
                        <TableCell>{f.user.phone}</TableCell>
                        <TableCell>{f.location}</TableCell>
                        <TableCell>{f.farm_size}</TableCell>
                        <TableCell>{f.crops}</TableCell>
                        <TableCell>{f.experience}</TableCell>
                      </TableRow>
                    )) : (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center">
                          No farmers found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Buyers Card */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Registered Buyers</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingBuyers ? (
                <div>Loading...</div>
              ) : (
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Interests</TableHead>
                      <TableHead>Volume</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {buyers?.length ? buyers.map((b, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{b.user.full_name}</TableCell>
                        <TableCell>{b.user.email}</TableCell>
                        <TableCell>{b.user.phone}</TableCell>
                        <TableCell>{b.location}</TableCell>
                        <TableCell>{b.buying_interests}</TableCell>
                        <TableCell>{b.purchase_volume}</TableCell>
                      </TableRow>
                    )) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center">
                          No buyers found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
