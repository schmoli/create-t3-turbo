import React from "react";

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class ClassComponent extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div className="p-2 text-red-700 bg-blue-200">
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export { ClassComponent };
