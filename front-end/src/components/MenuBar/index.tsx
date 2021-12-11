// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import React from 'react'
import { ReactNode, useContext, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import {
  Accordion,
  Dropdown,
  Icon,
  Menu,
  Responsive,
  Sidebar,
  SidebarPusher
} from 'semantic-ui-react'
import NetworkDropdown from 'src/ui-components/NetworkDropdown'
import getNetwork from 'src/util/getNetwork'

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useLogoutMutation } from '../../generated/graphql'
import { useFinalizedBlock, useRouter } from '../../hooks'
import { logout } from '../../services/auth.service'
// import AddressComponent from '../../ui-components/Address'
// import { useFetchLatestBlockNumberQuery } from '../../generated/graphql'

interface Props {
  children?: ReactNode
  className?: string
  visible?: boolean
}

const NETWORK = getNetwork()

const MenuBar = ({ className }: Props): JSX.Element => {
  const currentUser = useContext(UserDetailsContext)
  const [logoutMutation] = useLogoutMutation()
  const { history } = useRouter()
  const { setUserDetailsContextState, username } = currentUser
  // const { data } = useFetchLatestBlockNumberQuery()

  // const latestBlockNumber = data?.blockNumbers[0]?.number
  const latestBlockNumber = useFinalizedBlock()

  const handleLogout = async () => {
    try {
      await logoutMutation()
    } catch (error) {
      console.error(error)
    }
    logout(setUserDetailsContextState)
    history.push('/')
  }

  // Menu Items
  const contentItems = [{ content: 'Discussions', icon: 'comments', to: '/discussions' }]

  const onchainItems = [
    { content: 'Overview', to: '/onchain' },
    { content: 'Referenda', to: '/referenda' }
    // { content: 'Proposals', to: '/proposals' },
    // { content: 'Motions', to: '/motions' },
    // { content: 'Treasury proposals', to: '/treasury-proposals' },
    // { content: 'Tech comm proposals', to: '/tech-comm-proposals' },
    // { content: 'Tips', to: '/tips' },
    // { content: 'Bounties', to: '/bounties' },
    // { content: 'Council', to: '/council' },
    // { content: 'Search', to: '/search' }
  ]

  const loggedOutItems = [
    { content: 'Login', icon: 'sign in', to: '/login' },
    { content: 'Sign-up', icon: 'plus circle', to: '/signup' }
  ]

  const loggedInItems = [
    { content: 'Notifications', icon: 'bell', to: '/notification-settings' },
    { content: 'Settings', icon: 'cog', to: '/settings' },
    { content: 'Tracker', icon: 'bookmark', to: '/tracker' },
    { content: 'Logout', icon: 'sign-out', onClick: handleLogout, to: '/' }
  ]

  // const userMenu =
  //   currentUser.web3signup && currentUser.defaultAddress ? (
  //     <>
  //       <AddressComponent address={currentUser.defaultAddress} />
  //     </>
  //   ) : (
  //     <>
  //       <Icon name="user circle" inverted />
  //       {username}
  //     </>
  //   )

  const caretIcon = <Icon name="caret down" inverted />

  // Mobile Sidebar
  const [menuVisible, setMenuVisible] = useState(false)
  const [pushableHeight, setPushableHeight] = useState('0rem')
  const [accordionActive, setAccordionActive] = useState(false)

  const handleToggle = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true)
    menuVisible ? setPushableHeight('0rem') : setPushableHeight('100%')
  }

  const handleClose = () => {
    setMenuVisible(false)
    setPushableHeight('0rem')
  }

  const handleAccordionClick = () => {
    setAccordionActive(!accordionActive)
  }

  return (
    <>
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Menu className={`${className} ${NETWORK}`} inverted widths={2} id="menubar">
          <Menu.Item as={NavLink} to="/" className="logo" id="title" onClick={handleClose}>
            {/* <img alt="Polkassembly Logo" src={logo} /> */}
          </Menu.Item>
          <Menu.Menu position="right">
            <NetworkDropdown />
            <Menu.Item onClick={handleToggle} id="rightmenu">
              {!menuVisible ? <Icon name="sidebar" /> : <MdClose />}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable className={className} style={{ height: pushableHeight }}>
          <Sidebar
            as={Menu}
            direction="top"
            icon="labeled"
            inverted
            stackable
            vertical
            visible={menuVisible}
          >
            <Accordion>
              {contentItems.map((item, index) => (
                <Menu.Item as={NavLink} key={index} onClick={handleClose} {...item} />
              ))}
              <Accordion.Title active={accordionActive} index={0} onClick={handleAccordionClick}>
                <Menu.Item as={NavLink} content="On-chain" icon="chain" to="#" />
              </Accordion.Title>
              <Accordion.Content active={accordionActive}>
                {onchainItems.map((item, index) => (
                  <Menu.Item as={NavLink} key={index} onClick={handleClose} {...item} />
                ))}
              </Accordion.Content>
              {username ? (
                <>
                  {loggedInItems.map((item, index) => (
                    <Menu.Item as={NavLink} key={index} {...item} />
                  ))}
                </>
              ) : (
                <>
                  {loggedOutItems.map((item, index) => (
                    <Menu.Item as={NavLink} key={index} onClick={handleClose} {...item} />
                  ))}
                </>
              )}
              {latestBlockNumber ? (
                <Menu.Item>
                  <Icon name="cube" />
                  {` ${latestBlockNumber}`}
                </Menu.Item>
              ) : null}
            </Accordion>
          </Sidebar>
          <SidebarPusher />
        </Sidebar.Pushable>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Menu className={`${className} ${NETWORK}`} stackable inverted borderless>
          <Menu.Item as={NavLink} to="/" className="logo" id="title">
            {/* <img alt="Polkassembly Logo" src={logo} /> */}
          </Menu.Item>
          {/*{contentItems.map((item, index) => (*/}
          {/*  <Menu.Item as={NavLink} className="desktop_items" key={index} {...item} />*/}
          {/*))}*/}
          <Menu.Item className="desktop_items">
            <Dropdown trigger={<>On-chain</>} icon={caretIcon} item={true}>
              <Dropdown.Menu>
                {onchainItems.map((item, index) => (
                  <Menu.Item as={NavLink} key={index} {...item} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          {latestBlockNumber ? (
            <Menu.Item>
              <Icon name="cube" style={{ marginRight: '10px' }} />
              {` ${latestBlockNumber?.toNumber()}`}
            </Menu.Item>
          ) : null}
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to={'/delegation'}>
              Manage Delegation
            </Menu.Item>
            {/* <NetworkDropdown /> */}
            {/*{username ? (*/}
            {/*  <>*/}
            {/*    <Dropdown trigger={userMenu} icon={caretIcon} item={true}>*/}
            {/*      <Dropdown.Menu>*/}
            {/*        {loggedInItems.map((item, index) => (*/}
            {/*          <Menu.Item as={NavLink} key={index} {...item} />*/}
            {/*        ))}*/}
            {/*      </Dropdown.Menu>*/}
            {/*    </Dropdown>*/}
            {/*  </>*/}
            {/*) : (*/}
            {/*  <>*/}
            {/*    {loggedOutItems.map((item, index) => (*/}
            {/*      <Menu.Item as={NavLink} className="user_items" key={index} {...item} />*/}
            {/*    ))}*/}
            {/*  </>*/}
            {/*)}*/}
          </Menu.Menu>
        </Menu>
      </Responsive>
    </>
  )
}

export default styled(MenuBar)`
  &.polkadot {
    border-top: solid !important;
    border-top-color: ${({ theme }) => theme.colors.pink_primary} !important;
  }

  &.ui.menu,
  .ui.inverted.menu {
    font-family: ${({ theme }) => theme.fonts.font_default};
    background-color: ${({ theme }) => theme.colors.black_full};
    border-radius: 0rem;
    letter-spacing: 0.2px;

    & a.active {
      outline: none;
      background-color: ${({ theme }) => theme.colors.black_full} !important;
    }
    .item {
      color: ${({ theme }) => theme.colors.grey_secondary};
      font-weight: 500;
      &:hover {
        color: white;
      }
    }

    i.icon {
      color: ${({ theme }) => theme.colors.grey_secondary};
    }

    .logo {
      img {
        width: 16rem;

        @media only screen and (max-width: 992px) {
          width: 10rem;
        }
      }
      background-color: ${({ theme }) => theme.colors.black_full} !important;
    }
  }

  @media only screen and (max-width: 992px) {
    &.pushable {
      position: relative;
    }

    &.ui.menu,
    .ui.inverted.menu {
      min-height: 5rem;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.grey_primary};
      margin: 0rem !important;

      .desktop_items,
      #title {
        position: absolute;
      }

      .desktop_items,
      #title {
        text-align: left;
        margin: auto 0;
        left: 2rem;
        top: 0.3rem;
        padding-top: 1rem;
        padding-bottom: 0;
        border-radius: 0.8rem !important;
      }

      #rightmenu {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        max-width: 2rem;
        margin-right: 2rem !important;
        margin-left: 2rem !important;
      }

      .item {
        font-size: ${({ theme }) => theme.fontSizes.md};
        display: inline-block;
        &:before {
          width: 0rem;
        }
      }

      a.item:hover {
        background: none;
        color: ${({ theme }) => theme.colors.grey_secondary};
      }
    }

    .ui.top.sidebar {
      padding: 1rem;
      border-radius: 0rem !important;
      position: relative;
      .item {
        float: left;
        clear: both;
        text-align: left;
        border-radius: 0.8rem !important;
      }
    }

    .ui.icon.menu .item {
      text-align: left;
      padding: 1.5rem 1rem;
      & > .icon:not(.dropdown) {
        font-size: 1.6rem !important;
        display: inline-block;
        margin: 0 1.2rem auto 0 !important;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    &.ui.menu {
      padding: 0.5rem 2rem;
      font-size: ${({ theme }) => theme.fontSizes.md};
      .item {
        padding: 0.5rem 0.5rem;
        margin: 0 1.2rem;
        :hover {
          background-color: ${({ theme }) => theme.colors.black_full} !important;
        }
      }

      .ui.dropdown .menu > .item,
      .ui.dropdown .menu > .active.item {
        font-size: ${({ theme }) => theme.fontSizes.md}!important;
        font-weight: 400 !important;
      }
    }

    .desktop_items,
    .user_items,
    #title {
      i.icon {
        display: none;
      }
      i.icon.caret {
        display: block;
      }
    }
  }

  &.ui.inverted.menu a.item:hover,
  &.ui.inverted.menu .dropdown.item:hover {
    border-radius: 0.5rem;
  }
`
