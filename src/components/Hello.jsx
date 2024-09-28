const name = "Anurag";
const displayMessage = () => {
  return "Wow";
};
function Hello({ person }) {
  const{name,age,location} = person;
  return <div>{name} {age} {location}</div>;
}
export default Hello;