import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../styles/Home.module.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className={styles.sizeSearchbar}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: 280,
          marginTop: 1,
          marginBottom: 8,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Robo"
          inputProps={{ "aria-label": "Search Robo" }}
          onChange={onChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon color="error" />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
