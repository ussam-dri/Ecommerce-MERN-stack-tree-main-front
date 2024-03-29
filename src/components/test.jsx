/**
 * v0 by Vercel.
 * @see https://v0.dev/t/on40V2kz9Vv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid lg:grid-cols-[300px_1fr] min-h-screen w-full">
      <div className="hidden lg:block border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="rounded-full ml-auto" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
          <div className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Customers
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <form>
              <div className="flex items-center rounded-lg bg-white shadow border border-gray-200 w-full h-9 dark:border-gray-800">
                <SearchIcon className="m-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="appearance-none bg-white border-none w-full h-8  dark:bg-gray-950"
                  placeholder="Search for products"
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button className="rounded-full border-gray-200 w-8 h-8 dark:border-gray-800" size="icon" variant="outline">
            <ShoppingBagIcon className="h-4 w-4" />
            <span className="sr-only">Toggle cart</span>
          </Button>
        </header>
        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid items-center gap-4">
            <h1 className="font-semibold text-2xl lg:text-3xl">Air Max Sneakers</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-muted stroke-2" />
                <StarIcon className="w-4 h-4 fill-muted stroke-2" />
                <span className="text-sm font-medium">3.0</span>
              </div>
              <span className="text-2xl font-semibold">$120.00</span>
            </div>
            <form className="grid gap-4 md:flex md:items-center md:gap-2 lg:gap-4">
              <div className="grid gap-2">
                <Label className="sr-only" htmlFor="size">
                  Size
                </Label>
                <Select className="min-w-[100px]" id="size">
                  <option>Size</option>
                  <option>US 6</option>
                  <option>US 7</option>
                  <option>US 8</option>
                  <option>US 9</option>
                  <option>US 10</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label className="sr-only" htmlFor="color">
                  Color
                </Label>
                <Select className="min-w-[100px]" id="color">
                  <option>Color</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Green</option>
                </Select>
              </div>
              <Button size="lg">Add to cart</Button>
            </form>
            <p className="text-sm leading-loose md:w-2/3 lg:w-1/2">
              The Nike Air Max was the first shoe to feature visible air bags in the midsole. It was designed by Tinker
              Hatfield and originally released in 1987. The Air Max is known for its cushioning and style, making it a
              popular choice for runners and sneakerheads alike.
            </p>
          </div>
          <div className="grid items-center gap-4">
            <h2 className="font-semibold text-xl">Features</h2>
            <ul className="grid gap-2 list-disc list-inside text-sm">
              <li>Visible Air cushioning in the heel</li>
              <li>Mesh and suede upper for breathability and durability</li>
              <li>Waffle-patterned rubber outsole for traction</li>
              <li>Available in a variety of colorways</li>
            </ul>
          </div>
          <div className="grid items-center gap-4">
            <h2 className="font-semibold text-xl">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover overflow-hidden border"
                height="500"
                src="/placeholder.svg"
                width="500"
              />
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover overflow-hidden border"
                height="500"
                src="/placeholder.svg"
                width="500"
              />
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover overflow-hidden border"
                height="500"
                src="/placeholder.svg"
                width="500"
              />
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover overflow-hidden border"
                height="500"
                src="/placeholder.svg"
                width="500"
              />
            </div>
          </div>
          <div className="grid items-center gap-4">
            <h2 className="font-semibold text-xl">You might also like</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <Link className="aspect-square overflow-hidden rounded-lg" href="#">
                  <img
                    alt="Image"
                    className="aspect-square object-cover"
                    height="180"
                    src="/placeholder.svg"
                    width="180"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">Air Max 90 Sneakers</h3>
                    <p className="font-semibold text-sm">$120.00</p>
                  </div>
                </Link>
              </Card>
              <Card>
                <Link className="aspect-square overflow-hidden rounded-lg" href="#">
                  <img
                    alt="Image"
                    className="aspect-square object-cover"
                    height="180"
                    src="/placeholder.svg"
                    width="180"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">Air Max 95 Sneakers</h3>
                    <p className="font-semibold text-sm">$150.00</p>
                  </div>
                </Link>
              </Card>
              <Card>
                <Link className="aspect-square overflow-hidden rounded-lg" href="#">
                  <img
                    alt="Image"
                    className="aspect-square object-cover"
                    height="180"
                    src="/placeholder.svg"
                    width="180"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">Air Max 97 Sneakers</h3>
                    <p className="font-semibold text-sm">$170.00</p>
                  </div>
                </Link>
              </Card>
              <Card>
                <Link className="aspect-square overflow-hidden rounded-lg" href="#">
                  <img
                    alt="Image"
                    className="aspect-square object-cover"
                    height="180"
                    src="/placeholder.svg"
                    width="180"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2">Air Max 1 Sneakers</h3>
                    <p className="font-semibold text-sm">$100.00</p>
                  </div>
                </Link>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
