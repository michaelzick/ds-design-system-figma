import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, ShoppingCart, Bell } from "lucide-react";
import { FeaturedBlogSectionDemo } from "./HorizontalScrollSection";

export function ComponentShowcase() {
  return (
    <div className="space-y-12">
      <div className="-mx-6 sm:-mx-8">
        <FeaturedBlogSectionDemo />
      </div>

      {/* Cards */}
      <section>
        <h2 className="mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Uses surface-card background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This card demonstrates the default card styling with semantic tokens for background and borders.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="default">Action</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/50 bg-muted">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>With muted background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Uses the muted background token for subtle elevation and visual hierarchy.
              </p>
            </CardContent>
            <CardFooter>
              <Badge>New</Badge>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shop Card</CardTitle>
              <CardDescription>Special shop styling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-medium">$99.00</div>
                <button className="w-full px-4 py-2 rounded-md transition-opacity hover:opacity-90 shop-accent">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Add to Cart
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Forms */}
      <section>
        <h2 className="mb-6">Form Elements</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Example Form</CardTitle>
            <CardDescription>Using semantic input and label tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                defaultValue="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="w-full px-3 py-2 rounded-md border bg-background min-h-[100px] resize-y token-border-input"
                placeholder="Your message here..."
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-md">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive email notifications
                </div>
              </div>
              <Switch id="notifications" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="mb-6">Alerts</h2>
        <div className="space-y-4 max-w-2xl">
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a standard alert using the default semantic tokens.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>
              Uses destructive tokens for error states and critical information.
            </AlertDescription>
          </Alert>

          <div className="p-4 rounded-md border alert-ocean">
            <div className="flex gap-3">
              <Bell className="h-5 w-5 alert-ocean-icon" />
              <div>
                <div className="font-medium alert-ocean-text">Ocean Theme Alert</div>
                <div className="text-sm mt-1 alert-ocean-text">Custom alert using primitive ocean color tokens.</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md border alert-sand">
            <div className="flex gap-3">
              <Bell className="h-5 w-5 alert-sand-icon" />
              <div>
                <div className="font-medium alert-sand-text">Sand Theme Alert</div>
                <div className="text-sm mt-1 alert-sand-text">Custom alert using primitive sand color tokens.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="mb-6">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="border-0 badge-ocean">
            Ocean
          </Badge>
          <Badge className="border-0 badge-sand">
            Sand
          </Badge>
          <Badge className="border-0 badge-shop">
            Shop
          </Badge>
        </div>
      </section>
    </div>
  );
}
