import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select.jsx";
import { Slider } from "@/components/ui/slider.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Interactive Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tab1">
            <TabsList className="mb-4">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="space-y-4">
                <Label htmlFor="input1">Input Field</Label>
                <Input id="input1" placeholder="Type something..." />
                <Label htmlFor="textarea1">Textarea</Label>
                <Textarea id="textarea1" placeholder="Write something..." />
                <Button onClick={() => setCount(count + 1)}>Click me</Button>
                <div>Count: {count}</div>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="space-y-4">
                <Label htmlFor="select1">Select Option</Label>
                <Select>
                  <SelectTrigger id="select1">
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Options</SelectLabel>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
                <Label htmlFor="slider1">Slider</Label>
                <Slider id="slider1" defaultValue={[50]} max={100} step={1} />
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="space-y-4">
                <p>This is the third tab content.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
