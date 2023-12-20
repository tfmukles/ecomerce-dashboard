interface Props {
  title: string;
  subTitle?: string;
}

const ProductHeader = ({ title, subTitle }: Props) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="page-title">
          <h1>{title}</h1>
          <h3>{subTitle ?? "Shop"}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
