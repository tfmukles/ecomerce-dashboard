interface Props {
  className?: string;
}

const SocalLinks = ({ className }: Props) => {
  return (
    <ul className={"socal-links " + className}>
      <li>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/mukles.116476"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/mukles.116476"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/mukles.116476"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/mukles.116476"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocalLinks;
