import { getAllBodyStyles } from "@/actions/bodyStyle";
import SearchBodyStyleClient from "./SearchBodyStyleClient";

const SearchBodyStyle = async () => {
  const styles = await getAllBodyStyles();
  return <SearchBodyStyleClient initialStyles={styles} />;
};

export default SearchBodyStyle;