"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
} from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import {
  mainNavigation,
  servicesNav,
  type NavDropdown,
  type NavLink,
} from "@/lib/navigation";

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 300;

function slugify(label: string): string {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isDropdownActive(pathname: string, dropdown: NavDropdown) {
  return dropdown.items.some((item) => isActivePath(pathname, item.href));
}

function getMenuItems(panel: HTMLElement | null): HTMLElement[] {
  if (!panel) return [];
  return Array.from(panel.querySelectorAll<HTMLElement>('[role="menuitem"]'));
}

function getNavFocusables(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href]:not([tabindex="-1"])',
    ),
  );
}

type MegaMenuItemProps = {
  dropdown: NavDropdown;
  pathname: string;
  menuId: string;
  isOpen: boolean;
  finePointer: boolean;
  navContainerRef: RefObject<HTMLElement | null>;
  onOpen: () => void;
  onClose: (returnFocus?: boolean) => void;
  onToggle: () => void;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
};

function MegaMenuItem({
  dropdown,
  pathname,
  menuId,
  isOpen,
  finePointer,
  navContainerRef,
  onOpen,
  onClose,
  onToggle,
  onHoverEnter,
  onHoverLeave,
}: MegaMenuItemProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = isDropdownActive(pathname, dropdown);
  const isServices = dropdown.label === servicesNav.label;
  const panelId = `${menuId}-panel`;

  const handleTriggerKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const focusFirst = () => getMenuItems(panelRef.current)[0]?.focus();
      if (!isOpen) {
        onOpen();
        requestAnimationFrame(() => requestAnimationFrame(focusFirst));
      } else {
        focusFirst();
      }
      return;
    }

    if (e.key === "Escape" && isOpen) {
      e.preventDefault();
      onClose(true);
    }
  };

  const handlePanelKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const items = getMenuItems(panelRef.current);
    if (items.length === 0) return;

    const currentIndex = items.findIndex((el) => el === document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      items[next]?.focus();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      items[prev]?.focus();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      onClose(true);
      return;
    }

    if (e.key === "Tab" && !e.shiftKey && currentIndex === items.length - 1) {
      e.preventDefault();
      const focusables = getNavFocusables(navContainerRef.current);
      const triggerIndex = triggerRef.current
        ? focusables.indexOf(triggerRef.current)
        : -1;
      onClose(false);
      requestAnimationFrame(() => {
        focusables[triggerIndex + 1]?.focus();
      });
    }
  };

  const gridCols = isServices
    ? "sm:grid-cols-2"
    : dropdown.items.length > 4
      ? "sm:grid-cols-2"
      : "sm:grid-cols-1";

  return (
    <div
      className="relative"
      onMouseEnter={finePointer ? onHoverEnter : undefined}
      onMouseLeave={finePointer ? onHoverLeave : undefined}
    >
      <button
        ref={triggerRef}
        type="button"
        id={`${menuId}-trigger`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`inline-flex items-center gap-1.5 text-body transition-colors hover:text-orange-dark ${
          active ? "font-medium text-pine-dark" : "text-pine"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        onKeyDown={handleTriggerKeyDown}
      >
        {dropdown.label}
        <Chevron open={isOpen} />
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 top-full z-50 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 pt-2"
          onKeyDown={handlePanelKeyDown}
        >
          <div
            ref={panelRef}
            id={panelId}
            role="menu"
            aria-labelledby={`${menuId}-trigger`}
            className="rounded-card border border-sand bg-white p-6"
          >
            <div className={`grid gap-2 ${gridCols}`}>
              {dropdown.items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="rounded-control px-4 py-3 transition-colors hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark"
                  onClick={() => onClose(false)}
                >
                  <span className="flex items-baseline gap-2">
                    {isServices && (
                      <span className="text-label text-moss-dark">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    <span className="font-medium text-pine-dark">{item.label}</span>
                  </span>
                  {item.description && (
                    <span className="mt-1 block text-sm leading-relaxed text-pine">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileSection({
  dropdown,
  pathname,
  onNavigate,
}: {
  dropdown: NavDropdown;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const sectionId = useId();
  const isServices = dropdown.label === servicesNav.label;

  useEffect(() => {
    setOpen(isDropdownActive(pathname, dropdown));
  }, [pathname, dropdown]);

  return (
    <div className="border-b border-sand">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={sectionId}
        className="flex w-full items-center justify-between py-3.5 text-left text-h3 text-pine-dark"
        onClick={() => setOpen((v) => !v)}
      >
        {dropdown.label}
        <Chevron open={open} />
      </button>
      {open && (
        <ul id={sectionId} role="menu" className="space-y-1 pb-4">
          {dropdown.items.map((item, index) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className={`block rounded-control border-t border-sand px-4 py-3 text-body ${
                  isActivePath(pathname, item.href)
                    ? "font-medium text-orange-dark"
                    : "text-pine"
                }`}
                onClick={onNavigate}
              >
                <span className="flex items-baseline gap-2">
                  {isServices && (
                    <span className="text-label text-moss-dark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <span className="font-medium text-pine-dark">{item.label}</span>
                </span>
                {item.description && (
                  <span className="mt-1 block text-sm leading-relaxed text-pine">
                    {item.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TopLink({ link, pathname }: { link: NavLink; pathname: string }) {
  const active = isActivePath(pathname, link.href);
  return (
    <Link
      href={link.href}
      className={`text-body transition-colors hover:text-orange-dark ${
        active ? "font-medium text-pine-dark" : "text-pine"
      }`}
    >
      {link.label}
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  const navRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeMenu = useCallback(
    (id: string, returnFocus = false) => {
      clearTimers();
      setOpenId((current) => {
        if (current !== id) return current;
        return null;
      });
      if (returnFocus) {
        requestAnimationFrame(() => {
          document.getElementById(`nav-${id}-trigger`)?.focus();
        });
      }
    },
    [clearTimers],
  );

  const openMenu = useCallback(
    (id: string) => {
      clearTimers();
      setOpenId(id);
    },
    [clearTimers],
  );

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setOpenId(null);
  }, [pathname]);

  useEffect(() => {
    if (!openId) return;
    const activeId = openId;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node;
      const panel = document.getElementById(`nav-${activeId}-panel`);
      const trigger = document.getElementById(`nav-${activeId}-trigger`);
      if (panel?.contains(target) || trigger?.contains(target)) return;
      closeMenu(activeId);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu(activeId, true);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openId, closeMenu]);

  return (
    <nav ref={navRef} className="flex items-center gap-5 xl:gap-6" aria-label="Primary">
      {mainNavigation.dropdowns.map((dropdown) => {
        const id = slugify(dropdown.label);
        const isOpen = openId === id;

        return (
          <MegaMenuItem
            key={dropdown.label}
            dropdown={dropdown}
            pathname={pathname}
            menuId={`nav-${id}`}
            isOpen={isOpen}
            finePointer={finePointer}
            navContainerRef={navRef}
            onOpen={() => openMenu(id)}
            onClose={(returnFocus) => closeMenu(id, returnFocus)}
            onToggle={() => {
              if (isOpen) closeMenu(id, true);
              else openMenu(id);
            }}
            onHoverEnter={() => {
              if (!finePointer) return;
              clearTimers();
              openTimer.current = setTimeout(() => openMenu(id), OPEN_DELAY_MS);
            }}
            onHoverLeave={() => {
              if (!finePointer) return;
              clearTimers();
              closeTimer.current = setTimeout(() => {
                setOpenId((current) => (current === id ? null : current));
              }, CLOSE_DELAY_MS);
            }}
          />
        );
      })}
      {mainNavigation.links.map((link) => (
        <TopLink key={link.href} link={link} pathname={pathname} />
      ))}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-moss bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container flex h-18 items-center justify-between gap-4 xl:gap-6">
        <Logo />

        <div className="hidden xl:block">
          <DesktopNav pathname={pathname} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href={mainNavigation.cta.href}
            className="hidden text-sm md:inline-flex lg:text-body"
          >
            {mainNavigation.cta.label}
          </ButtonLink>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-control border border-sand text-pine xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-sand bg-white xl:hidden"
        >
          <nav className="container py-4" aria-label="Mobile">
            {mainNavigation.dropdowns.map((dropdown) => (
              <MobileSection
                key={dropdown.label}
                dropdown={dropdown}
                pathname={pathname}
                onNavigate={closeMobile}
              />
            ))}

            <div className="border-b border-sand py-1">
              {mainNavigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3.5 text-h3 ${
                    isActivePath(pathname, link.href)
                      ? "font-medium text-orange-dark"
                      : "text-pine-dark"
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <ButtonLink
              href={mainNavigation.cta.href}
              size="lg"
              className="mt-5 w-full"
            >
              {mainNavigation.cta.label}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
