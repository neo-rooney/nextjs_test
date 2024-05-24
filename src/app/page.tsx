import styles from "./page.module.css";

const fetchData = async () => {
  try {
    const res = await fetch(
      "https://prod-dev.cccv.to/v1/api/bizcard-actions/find?findType=USER_URL&value=rooney",
      {
        cache: "no-cache",
      }
    );

    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export default async function Home() {
  const data = await fetchData();

  return <main className={styles.main}>{data.id}</main>;
}
