const MenuItem = ({ name, isActive, icon }) => {
  return (
    <a href="#">
      <style jsx>{`
        a {
          width: 100%;
          display: inline-block;
          background: linear-gradient(
            to bottom,
            #b30f13 0%,
            #ed1c24 100%
          );
          font-size: 21px;
          font-weight: bold;
          padding: 16px;
          border: 1px solid rgba(0, 0, 0, 0.75);
          border-radius: 6px;
          border-bottom-color: rgba(255, 255, 255, 0.55);
          border-right-color: rgba(255, 255, 255, 0.55);
        }
        .icon {
          margin-right: 15px;
        }
      `}</style>
      <span className="icon d-md-none">{icon}</span>
      <span className="label">{name}</span>
    </a>
  );
};

export default MenuItem;
