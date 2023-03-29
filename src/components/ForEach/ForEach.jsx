function ForEach({ of = [], children, shuffle = false }) {
  return <>{of.map(children)}</>;
}

export default ForEach;
