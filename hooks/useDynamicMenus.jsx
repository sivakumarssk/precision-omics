import { useState, useEffect } from "react";
import axios from "axios";

export const useDynamicMenus = () => {
  const [dynamicMenus, setDynamicMenus] = useState([]);

  useEffect(() => {
    const fetchDynamicMenus = async () => {
      try {
        const response = await axios.get("https://admin.precision-omics.org/api/menus"); // Replace with your dynamic menu API
        setDynamicMenus(response.data.menus || []);
      } catch (error) {
        console.error("Error fetching dynamic menus:", error);
      }
    };

    fetchDynamicMenus();
  }, []);

  return dynamicMenus;
};
