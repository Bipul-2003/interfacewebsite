
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import Link from "next/link";

export function Navbar(){

  

    return(
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 inset-x-0 z-50 fixed top-0 bg-background">
        <section>
          <Link href="/" className="text-2xl font-bold">
            Interface
          </Link>
        </section>
        <section>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start justify-evenly gap-x-12 sm:flex-row ">
              <div className="">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
              <div className="">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}>
                    <Link href="/courses">Courses</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
              <div className="">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}>
                    <Link href="/">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
        <section className="flex gap-x-2">
          {/* <div className="">
            {
              user?.role===1? <Button className="rounded-full" asChild><Link href='/admin/dashboard'>Dashboard</Link></Button> : null
            }
          </div> */}
        </section>
      </div>
    )
}