interface Props {
  countCartItem: number;
}
const NavBar = ({ countCartItem }: Props) => {
  return <div>NavBar: {countCartItem} </div>;
};

export default NavBar;
