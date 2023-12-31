import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ProviderCard from "@/components/ProviderCard";
import DeresPagination from "@/components/DeresPagination";
import { fromOffsetToPageNum } from "@/helpers";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const Page = async ({ searchParams }) => {
  const { info: { accessToken } } = await getServerSession(authOptions);
  const { data } = await axios.get(`http://localhost:8080/providers/search?${new URLSearchParams(searchParams)}`,
    { headers: { Authorization: accessToken } })

  return (
    <Stack gap={4} width='100%'>
      <Grid container spacing={2}>
        {data?.providers.map((props, index) => (
          <Grid key={`provedor-${index}`} xs={4}>
            <ProviderCard {...props} />
          </Grid>
        ))}
      </Grid>
      <DeresPagination count={data?.pages + 1} page={fromOffsetToPageNum(searchParams.offset)} />
    </Stack>
  );
};

export default Page;
