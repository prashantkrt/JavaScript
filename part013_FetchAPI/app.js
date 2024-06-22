const url = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
  console.log("getting data ....");
  let promise = await fetch(url);
  console.log(promise);
};
