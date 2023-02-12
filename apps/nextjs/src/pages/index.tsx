import { Button, ClassComponent, FunctionalComponent } from "@acme/ui";

export default function ReactComponent() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-300 text-green-700">
      <h2 className="text-orange-700">it works!</h2>
      <Button>This is a button</Button>
      <FunctionalComponent>This is a functional Component</FunctionalComponent>
      <ClassComponent message="This is a class component" />
    </div>
  );
}
