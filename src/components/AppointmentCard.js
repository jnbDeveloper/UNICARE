import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

export default function AppointmentCard({
  id,
  time,
  image,
  name,
  faculty,
  note,
  checkPatient,
  shadow = true,
  sx,
}) {
  return (
    <Card
      variant={shadow ? "elevation" : "outlined"}
      style={{
        ...(!shadow && {
          boxShadow: "none",
        }),
      }}
      sx={{ ...sx }}
    >
      <CardContent>
        <Typography variant="subtitle2">Today, {time}</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Box display="flex" alignItems="center">
            <Avatar alt="Ahinsa Lakshani" src={image} />
            <Box display="flex" flexDirection="column" ml={1} mr={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                  textOverflow: "ellipsis",
                }}
              >
                {faculty}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          fontSize="10px"
          mt={1}
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
          }}
        >
          {note}
        </Typography>

        <Box display="flex" justifyContent="right" mt={1}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<NoteAltIcon />}
            onClick={() => {
              if (typeof checkPatient === "function") {
                checkPatient(id);
              }
            }}
          >
            Check Patient
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
