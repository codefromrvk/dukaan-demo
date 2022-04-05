import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import data from "../../utils/data.js";

import "./main.css";
import Card from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function Main() {
  return (
    <div className="hero-wrapper container">
      <main className="overlay">
        <div className="main-wrapper">
          <h1>Free slogan maker</h1>
          <p>
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <label htmlFor="input-text">Word for your slogan</label>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              mt: "10px",
              display: "flex",
              alignItems: "center",
              width: 400
            }}
          >
            <InputBase
              id="input-text"
              value="cozy"
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <CloseIcon />
            </IconButton>
          </Paper>
          <button className="generate-btn">Generate slogans</button>
          <hr />
          <div className="result-title">
            <p> We have generated 1,023 slogans for “cozy”</p>
            <button className="download-all-btn">Download all</button>
          </div>
          <div class="grid">
            {data.map((ele) => {
              return <Card details={ele.data} />;
            })}
          </div>
          <hr />
          <div className="pagination-wrapper">
            <div class="pagination">
              <div className="links-wrapper">
                <a href="#">1</a>
                <a class="active" href="#">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a>....</a>
                <a href="#">21</a>
              </div>

              <span style={{ color: "#146eb4" }}>Next &gt;</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
