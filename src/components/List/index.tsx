type ListProps = {
  items: string[];
  gap?: number;
};

const List = ({ items, gap }: ListProps) => {
  return (
    <ul className={`navbar-nav gap-${gap}`}>
      {items.map((item) => (
        <li key={item} className="nav-item">
          <a className="nav-link active" aria-current="page" href={`#${item}`}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
