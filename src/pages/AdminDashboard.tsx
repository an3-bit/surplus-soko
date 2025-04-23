
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function fetchFarmers() {
  return supabase.from("farmer_profiles").select("*").then(({ data }) => data);
}
function fetchBuyers() {
  return supabase.from("buyer_profiles").select("*").then(({ data }) => data);
}

export default function AdminDashboard() {
  const { data: farmers, isLoading: loadingFarmers } = useQuery({ queryKey: ["farmers"], queryFn: fetchFarmers });
  const { data: buyers, isLoading: loadingBuyers } = useQuery({ queryKey: ["buyers"], queryFn: fetchBuyers });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Registered Farmers</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingFarmers ? (
              <div>Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Farm Size</TableHead>
                    <TableHead>Crops</TableHead>
                    <TableHead>Experience</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {farmers?.length
                    ? farmers.map((f, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{f.id}</TableCell>
                          <TableCell>{f.location}</TableCell>
                          <TableCell>{f.farm_size}</TableCell>
                          <TableCell>{f.crops}</TableCell>
                          <TableCell>{f.experience}</TableCell>
                        </TableRow>
                      ))
                    : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">No farmers found.</TableCell>
                      </TableRow>
                    )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Registered Buyers</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingBuyers ? (
              <div>Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Interests</TableHead>
                    <TableHead>Volume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {buyers?.length
                    ? buyers.map((b, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{b.business_name}</TableCell>
                          <TableCell>{b.location}</TableCell>
                          <TableCell>{b.buying_interests}</TableCell>
                          <TableCell>{b.purchase_volume}</TableCell>
                        </TableRow>
                      ))
                    : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">No buyers found.</TableCell>
                      </TableRow>
                    )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
