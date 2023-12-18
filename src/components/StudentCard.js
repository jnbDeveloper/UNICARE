import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

import NumbersIcon from "@mui/icons-material/Numbers";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SchoolIcon from "@mui/icons-material/School";

export default function StudentCard() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "rgba(128, 128, 128, 0.03)",
        },
      }}
    >
      <CardContent>
        <Box display="flex" columnGap={1}>
          <Avatar src="../../profile1.png" />
          <Box display="flex" flexDirection="column">
            <Typography variant="subtitle2">Imashi Perera</Typography>
            <Typography
              fontSize="10px"
              color="text.disabled"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2,
                textOverflow: "ellipsis",
              }}
            >
              Laborum deserunt aliquip nulla officia labore laboris ad in
              proident ut nisi exercitation. Esse excepteur duis nisi sit
              aliquip pariatur id ut. Nulla duis excepteur amet exercitation
              dolore dolor sit.
            </Typography>
            <Box display="flex" columnGap={1} mt={1}>
              <NumbersIcon fontSize="small" />
              <Typography variant="caption">PS2826</Typography>
            </Box>
            <Box display="flex" columnGap={1} mt={1}>
              <HowToRegIcon fontSize="small" />
              <Typography variant="caption">EU/IS/2019/PHY/76</Typography>
            </Box>
            <Box display="flex" columnGap={1} mt={1}>
              <SchoolIcon fontSize="small" />
              <Typography variant="caption">Faculty of Science</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
