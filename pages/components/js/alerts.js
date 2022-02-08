
class MyAlert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      this.props.show ? React.createElement(
        "div",
        { style: { fontSize: '1.5rem' }, "class": "alert alert-primary", role: "alert" },
        ' ',
        this.props.text
      ) : null
    );
  }
}