import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import PlaceIcon from "@mui/icons-material/Place";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Detail = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ fontWeight: 400 }}>Welcome Aashutosh Tripathy</h1>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="row">
          <div className="add_btn">
                <button className="btn btn-warning ms-2">
                  <EditIcon />
                </button>
                <button className="btn btn-danger ms-2">
                  <DeleteIcon />
                </button>
              </div>
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                Name:{" "}
                <span style={{ fontWeight: 400 }}>Aashutosh Tripathy</span>
              </h3>
              <h3 className="mt-3">
                Age: <span style={{ fontWeight: 400 }}>21</span>
              </h3>
              <p>
                <EmailIcon /> Email: <span>ashutosh@google.com</span>
              </p>
              <p>
                <WorkIcon /> Occupation: <span>Software Developer</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              
              <p>
                {" "}
                <StayCurrentPortraitIcon /> Mobile: <span>0123456789</span>
              </p>
              <p>
                {" "}
                <PlaceIcon /> Location: <span>World Wide</span>
              </p>
              <p>
                {" "}
                <DescriptionIcon /> Description:{" "}
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  tempore illum aliquam consequuntur id, repellat a dignissimos
                  ipsum nihil nulla.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
