import { MenuContext } from "./MenuContext";
import supabase from "../api/supaBase";
import { useState, useEffect } from "react";
import { sileo } from "sileo";
export const MenuProvider = ({ children }) => {
  const [menusData, setMenusData] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const { data, error } = await supabase.from("menu_categories").select("*");
    if (error || !data) {
      sileo.error("Error al obtener las categorias");
      return;
    }
    const categoriesData = data.map((category) => ({
      id: category.id,
      name: category.name,
    }));
    setCategories(categoriesData);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchMenu = async () => {
    const { data, error } = await supabase.from("menus").select("*");
    if (error || !data) {
      sileo.error("Error al obtener el menu");
      return;
    }
    const menuData = data.map((menu) => ({
      id: menu.id,
      name: menu.name,
      price: menu.price,
      description: menu.description,
      image: menu.image,
      category_id: menu.category_id,
    }));
    setMenusData(menuData);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    console.log(menusData);
  }, [menusData]);

  const handleSaveMenu = async (formDataMenu) => {
    const { data, error } = await supabase
      .from("menus")
      .insert({
        name: formDataMenu.name,
        price: formDataMenu.price,
        description: formDataMenu.description,
        image: formDataMenu.image,
        category_id: formDataMenu.category,
      })
      .select("id")
      .single();

    if (error) {
      sileo.error("Error al guardar el menu");
      return null;
    }
    sileo.success({ title: "Menu guardado exitosamente" });
    return data.id;
  };
  const handleSaveIngredients = async (formData, menuId) => {
    const { error } = await supabase.from("menu_ingredients").insert({
      menu_id: menuId,
      product_id: formData.product_id,
      cantidad_required: formData.cantidad,
    });
    if (error) {
      sileo.error("Error al guardar el ingrediente");
      return;
    }
    sileo.success({ title: "Ingrediente agregado exitosamente" });
  };
  return (
    <MenuContext.Provider
      value={{
        handleSaveMenu,
        handleSaveIngredients,
        fetchMenu,
        menusData,
        categories,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
