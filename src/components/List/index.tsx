type ListProps = {
  items: string[];
  gap?: number;
  className?: string
};

const List = ({ items, gap, className }: ListProps) => {
  return (
    <ul className={`navbar-nav gap-${gap}`}>
      {items.map((item) => (
        <li key={item} className={`nav-item ${className}`}>
          <a className="nav-link active text-light" aria-current="page" href={`#${item}`}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
