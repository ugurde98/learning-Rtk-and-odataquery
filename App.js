import { StatusBar } from "expo-status-bar";
import { QueryBuilder } from "odata-query-builder";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { useGetProductQuery, useGetProductsQuery } from "./redux/apiSlice";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Xyz />
    </Provider>
  );
}

export const Xyz = () => {
  const query = new QueryBuilder()
    // .count()
    .top(2)
    .skip(5)
    // .expand("NavigationProp")
    // .orderBy("MyPriorityProp")
    //.filter((f) => f.filterExpression("Name", "eq", "Computers"))
    // .select("My Properties")
    .toQuery();

  console.log("query: ", query);
  const { data: categories } = useGetProductsQuery("");
  console.log("categories: ", categories);
  const { data, isLoading, error } = useGetProductsQuery(query);
  console.log("data: ", data);
  if (data) {
  

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {
        data && data.map(item => <Category category={item} />)
      }
    </View>
  );
};


export const Category = ({category}) => {
  const {data} = useGetProductQuery(category.SeName);
  console.log("Category: ", data);

  return (
    <>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
