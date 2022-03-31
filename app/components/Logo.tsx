export const Logo = ({ className, ...rest }: any) => {
  return (
    <div className={`logo ${className}`} {...rest}>
      <div className="top">OC/LA</div>
      <div className="bottom">Hardcore Shows</div>
    </div>
  );
};
