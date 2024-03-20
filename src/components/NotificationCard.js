import React from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
} from "@mui/material";

export default function NotificationCard({ data, onClicked = (type) => {} }) {
  return (
    <Button
      onClick={() => onClicked(data.type)}
      sx={{ padding: 0, textTransform: "none", borderRadius: 0 }}
      fullWidth
    >
      <Card
        sx={{
          boxShadow: "none",
          width: "300px",
          borderRadius: 0,
          backgroundColor: "rgba(0, 0, 0, 0.03)",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <Typography variant="caption">{data.title}</Typography>
          <Box display="flex" columnGap={1} mt={1}>
            <Avatar src={data.image} />
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="subtitle2">{data.name}</Typography>
              <Typography
                fontSize="10px"
                color="text.disabled"
                textAlign="start"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                }}
              >
                {data.content}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Button>
  );
}
