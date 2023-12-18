import React from "react";
import { Card, CardContent, Box, Avatar, Typography } from "@mui/material";

export default function NotificationCard() {
  return (
    <Card
      sx={{
        boxShadow: "none !important",
        width: "300px",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "rgba(128, 128, 128, 0.03)",
        },
      }}
    >
      <CardContent>
        <Typography variant="caption">New appointment</Typography>
        <Box display="flex" columnGap={1} mt={1}>
          <Avatar src="../../profile3.png" />
          <Box display="flex" flexDirection="column">
            <Typography variant="subtitle2">Nayanajith Bandara</Typography>
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
              Amet proident sint eiusmod Lorem laborum ut reprehenderit
              reprehenderit Lorem duis duis aute. Adipisicing sint ipsum ullamco
              dolore anim. Proident sit aliqua elit minim eiusmod esse id Lorem
              magna ut.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
