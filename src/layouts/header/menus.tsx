"use client"

import { useState, useEffect, type FC, MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"

// ===== INLINE CSS STYLES =====
const navStyle: React.CSSProperties = {
  background: "#fff",
  padding: "15px 0",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
}

const menuListStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  padding: "0",
  margin: "0",
  listStyle: "none"
}

const menuItemStyle: React.CSSProperties = {
  position: "relative",
  listStyle: "none"
}

const categoryLinkStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  color: "#2c3e50",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "15px",
  borderRadius: "6px",
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
}

const megaMenuContainerStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  left: "0",
  background: "#ffffff",
  minWidth: "800px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  border: "1px solid #e8eef7",
  zIndex: 999,
  display: "none",
  padding: "0"
}

const sidebarStyle: React.CSSProperties = {
  display: "flex",
  height: "100%"
}

const level1SidebarStyle: React.CSSProperties = {
  width: "280px",
  background: "#f8fafc",
  borderRight: "1px solid #e2e8f0",
  padding: "16px 0"
}

const level2SidebarStyle: React.CSSProperties = {
  width: "280px",
  background: "#ffffff",
  borderRight: "1px solid #e2e8f0",
  padding: "16px 0"
}

const sidebarHeaderStyle: React.CSSProperties = {
  padding: "12px 20px 8px 20px",
  fontWeight: 700,
  color: "#1a1a1a",
  fontSize: "14px",
  textTransform: "uppercase",
  borderBottom: "1px solid #e2e8f0",
  marginBottom: "8px"
}

const sidebarItemStyle: React.CSSProperties = {
  display: "block",
  padding: "12px 20px",
  textDecoration: "none",
  color: "#334155",
  fontSize: "14px",
  fontWeight: 500,
  transition: "all 0.2s ease",
  border: "none",
  background: "transparent",
  width: "100%",
  textAlign: "left",
  cursor: "pointer"
}

const sidebarItemHoverStyle: React.CSSProperties = {
  background: "#eff6ff",
  color: "#0070f3"
}

// ===== API INTERFACES =====
interface Category {
  id: number | string
  name: string
  children?: Category[]
}

interface ApiResponse {
  status: number
  data: { hierarchy: Category[] }
  error?: string
}

// ===== MENU DATA INTERFACES =====
interface DropdownMenu {
  title: string
  link: string
}

interface MenuItem {
  id: number
  name: string
  link: string
  dropdown_menus?: DropdownMenu[]
  home_menus?: any[]
  shop_menus?: any[]
}

// Mock menu data - replace with your actual import
const menu_data: MenuItem[] = [
  // {
  //   id: 1,
  //   name: "Home",
  //   link: "/",
  //   home_menus: []
  // },
  // {
  //   id: 2,
  //   name: "Shop",
  //   link: "/shop",
  //   shop_menus: []
  // },
  // {
  //   id: 3,
  //   name: "Products",
  //   link: "/products",
  //   dropdown_menus: [
  //     { title: "All Products", link: "/products" },
  //     { title: "Featured", link: "/products/featured" }
  //   ]
  // }
]

const Menus: FC = () => {
  const [dynamicCategories, setDynamicCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [activeSubCategory, setActiveSubCategory] = useState<Category | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://ecomm.braventra.in/api/category/all-nested")
        const result: ApiResponse = await response.json()
        if (result.status === 200) {
          setDynamicCategories(result.data.hierarchy)
        } else {
          throw new Error(result.error || "Failed to fetch categories")
        }
      } catch (err: any) {
        setError(err.message || "Unknown error")
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const showMenu = (e: MouseEvent<HTMLLIElement>, category?: Category) => {
    const megaMenu = e.currentTarget.querySelector(".mega-menu") as HTMLElement
    if (megaMenu) {
      megaMenu.style.display = "block"
      if (category) {
        setActiveCategory(category)
        setActiveSubCategory(null)
      }
    }
  }

  const hideMenu = (e: MouseEvent<HTMLLIElement>) => {
    const megaMenu = e.currentTarget.querySelector(".mega-menu") as HTMLElement
    if (megaMenu) {
      megaMenu.style.display = "none"
      // Small delay to allow for hover transition to submenus
      setTimeout(() => {
        setActiveCategory(null)
        setActiveSubCategory(null)
      }, 200)
    }
  }

  const handleSubCategoryHover = (subCategory: Category) => {
    setActiveSubCategory(subCategory)
  }

  const renderCategoryMenu = (category: Category) => {
    const hasChildren = category.children && category.children.length > 0

    return (
      <li 
        key={category.id} 
        style={menuItemStyle} 
        onMouseEnter={(e) => showMenu(e, category)} 
        onMouseLeave={hideMenu}
      >
        <Link href={`/category/${category.id}`} style={categoryLinkStyle}>
          {category.name} {hasChildren && "›"}
        </Link>

        {hasChildren && (
          <div className="mega-menu" style={megaMenuContainerStyle}>
            <div style={sidebarStyle}>
              {/* Level 1 - Direct Children */}
              <div style={level1SidebarStyle}>
                <div style={sidebarHeaderStyle}>{category.name}</div>
                {category.children!.map((l2) => (
                  <button
                    key={l2.id}
                    style={{
                      ...sidebarItemStyle,
                      ...(activeSubCategory?.id === l2.id ? sidebarItemHoverStyle : {})
                    }}
                    onMouseEnter={() => handleSubCategoryHover(l2)}
                    onClick={() => window.location.href = `/category/${l2.id}`}
                  >
                    {l2.name} {l2.children && l2.children.length > 0 && "›"}
                  </button>
                ))}
              </div>

              {/* Level 2 - Grandchildren (shown when hovering Level 1) */}
              {activeSubCategory && activeSubCategory.children && activeSubCategory.children.length > 0 && (
                <div style={level2SidebarStyle}>
                  <div style={sidebarHeaderStyle}>{activeSubCategory.name}</div>
                  {activeSubCategory.children.map((l3) => (
                    <Link
                      key={l3.id}
                      href={`/category/${l3.id}`}
                      style={sidebarItemStyle}
                      className="l3-hover-link"
                    >
                      {l3.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </li>
    )
  }

  return (
    <nav style={navStyle}>
      <ul style={menuListStyle}>
        {menu_data.map((m) => (
          <li key={m.id} style={menuItemStyle} onMouseEnter={showMenu} onMouseLeave={hideMenu}>
            <Link href={m.link} style={categoryLinkStyle}>{m.name}</Link>

            {(m.dropdown_menus || m.home_menus || m.shop_menus) && (
              <div className="mega-menu" style={megaMenuContainerStyle}>
                <div style={sidebarStyle}>
                  <div style={level1SidebarStyle}>
                    <div style={sidebarHeaderStyle}>{m.name}</div>
                    {m.dropdown_menus?.map((d, i) => (
                      <Link
                        key={i}
                        href={d.link}
                        style={sidebarItemStyle}
                        className="l3-hover-link"
                      >
                        {d.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}

        {loading && <li>Loading...</li>}
        {error && <li style={{ color: "red" }}>{error}</li>}
        {!loading && !error && dynamicCategories.map(renderCategoryMenu)}
      </ul>

      {/* ✅ Hover Effect CSS */}
      <style jsx>{`
        .l3-hover-link {
          display: block;
          color: #555;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .l3-hover-link:hover {
          color: #0070f3;
          font-weight: 700;
          transform: translateX(5px);
        }
        
        .mega-menu {
          animation: fadeIn 0.2s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}

export default Menus