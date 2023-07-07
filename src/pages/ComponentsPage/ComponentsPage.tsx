import * as React from "react";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import Radio from "../../components/Radio/Radio";
import Toggle from "../../components/Toggle/Toggle";

import { IoLockClosedOutline } from "react-icons/io5";

import styles from "./ComponentsPage.module.scss";

interface PAGE_PROPS {}

const ComponentsPage: React.FC<PAGE_PROPS> = ({}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [input, setInput] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const [radio, setRadio] = React.useState<boolean>(true);
  // FUNCTIONS ----------------------
  const handleClickButton = () => {
    console.log("Button clicked");
  };
  const handleClickBadge = () => {
    console.log("Remove or select this badge");
  };
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit input.");
  };
  // RETURN -------------------------
  return (
    <div className="App">
      {/* -------------- BUTTONS ----------------- */}
      <div className="App__container">
        {/* -------------- FILL ------------ */}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              text={"Button"}
              shape={"default"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              text={"Button"}
              shape={"round"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              text={"Button"}
              shape={"round"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              text={"Button"}
              shape={"round"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              text={"Button"}
              shape={"square"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              text={"Button"}
              shape={"square"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              text={"Button"}
              shape={"square"}
            />
          </div>
        </div>
        {/* ------------ OUTLINE ------------------*/}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              text={"Button"}
              shape={"default"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              text={"Button"}
              shape={"round"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              text={"Button"}
              shape={"round"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              text={"Button"}
              shape={"round"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              text={"Button"}
              shape={"square"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              text={"Button"}
              shape={"square"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              text={"Button"}
              shape={"square"}
            />
          </div>
        </div>
        {/* ------------ underline ------------------*/}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="underline"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="underline"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="underline"
              text={"Button"}
              shape={"default"}
            />
          </div>
        </div>

        {/* ------------ text ------------------*/}
        <div className="App__section">
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="text"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="text"
              text={"Button"}
              shape={"default"}
            />
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="text"
              text={"Button"}
              shape={"default"}
            />
          </div>
        </div>

        {/* FINE BUTTONS ------------------------------- */}
      </div>
      <hr />
      {/* -------------- BUTTONS NO TEXT ----------------- */}
      <div className="App__container">
        {/* -------------- FILL ------------ */}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              shape={"default"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              shape={"round"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              shape={"round"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              shape={"round"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              shape={"square"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              shape={"square"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              shape={"square"}
            />
          </div>
        </div>
        {/* ------------ OUTLINE ------------------*/}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              shape={"default"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              shape={"round"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              shape={"round"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              shape={"round"}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="outline"
              shape={"square"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="outline"
              shape={"square"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="outline"
              shape={"square"}
            />
          </div>
        </div>
        {/* ------------ underline ------------------*/}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="underline"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="underline"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="underline"
              shape={"default"}
            />
          </div>
        </div>

        {/* ------------ text ------------------*/}
        <div className="App__section">
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"xs"}
              type="text"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"sm"}
              type="text"
              shape={"default"}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                handleClickButton();
              }}
              size={"md"}
              type="text"
              shape={"default"}
            />
          </div>
        </div>

        {/* FINE BUTTONS ------------------------------- */}
      </div>
      <hr />
      {/* -------------- BADGES ----------------- */}
      <div className="App__container">
        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"default"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"default"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"default"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"round"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"round"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"round"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"square"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"square"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"square"}
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              isIcon
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>

        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"default"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"default"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"default"}
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"round"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"round"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"round"}
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* FILL ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"square"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"square"}
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"square"}
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"default"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/* OUTLINE ICON */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"Badge"}
              shape={"square"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>

        {/*  */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/*  */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"SALE"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/*  */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"S"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"S"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"S"}
              isRound
              shape={"round"}
              type="fill"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
        {/*  */}
        <div className="App__section">
          <div>
            <Badge
              size={"sm"}
              text={"S"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"md"}
              text={"S"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
          <div>
            <Badge
              size={"lg"}
              text={"S"}
              isRound
              shape={"round"}
              type="outline"
              onClick={() => handleClickBadge()}
            />
          </div>
        </div>
      </div>
      <hr />
      {/* -------------- FORM ----------------- */}
      <div className="App__container">
        <div className="App__section">
          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              inputType="text"
              placeholder="Input text"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              inputType="text"
              required
              onClick={() => {
                console.log("Put it into Form");
              }}
              placeholder="Input text"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>

          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              icon={<IoLockClosedOutline size={24} />}
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              icon={<IoLockClosedOutline size={24} />}
              error="Password must have at least 12 char"
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="outline"
              icon={<IoLockClosedOutline size={24} />}
              inputType="password"
              placeholder="Password"
              setInput={setInput}
              isDisabled
            />
          </div>
        </div>
        <div className="App__section">
          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              inputType="text"
              placeholder="Input text"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              inputType="text"
              required
              onClick={() => {
                console.log("Put it into Form");
              }}
              placeholder="Input text"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>

          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              icon={<IoLockClosedOutline size={24} />}
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              icon={<IoLockClosedOutline size={24} />}
              error="Password must have at least 12 char"
              inputType="password"
              placeholder="Password"
              setInput={setInput}
            />
          </div>
          <div className="col-6">
            input: {input}
            <Input
              type="underline"
              icon={<IoLockClosedOutline size={24} />}
              inputType="password"
              placeholder="Password"
              setInput={setInput}
              isDisabled
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="App__container">
        <div className="App__section">
          <div className="col-8">
            <form onSubmit={handleInputSubmit} className="App__form">
              <Input
                type="outline"
                inputType="email"
                placeholder="Email"
                required
                setInput={setInput}
              />
              <Input
                type="outline"
                inputType="password"
                placeholder="Password"
                required
                setInput={setInput}
              />
              <Button size={"xs"} submit shape={"default"} onClick={() => {}} />
            </form>
          </div>
        </div>
      </div>
      <hr />
      {/* --------------- TOGGLE ---------------- */}
      <div className="App__container">
        <div className="App__section">
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle setActive={setActive} isActive={active} size="sm" />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle setActive={setActive} isActive={active} size="md" />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle setActive={setActive} isActive={active} size="lg" />
          </div>
        </div>
        <div className="App__section">
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="primary"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="secondary"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="tertiary"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Disabled</p>
            <Toggle
              color="success"
              setActive={setActive}
              isActive={active}
              size="md"
              disabled
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="warning"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="danger"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="light"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="medium"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
          <div>
            <p>Is active : {active ? "true" : "false"}</p>
            <Toggle
              color="dark"
              setActive={setActive}
              isActive={active}
              size="md"
            />
          </div>
        </div>
      </div>
      <hr />
      {/* --------------- CHECKBOX ---------------- */}
      <div className="App__container">
        <div className="App__section">
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              size="sm"
              color="primary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              size="md"
              color="secondary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              size="lg"
              color="tertiary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
        </div>
        {/* --------- */}
        <div className="App__section">
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="primary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="secondary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="tertiary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="success"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="danger"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="warning"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox color="light" setActive={setChecked} isActive={checked} />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              color="medium"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox color="dark" setActive={setChecked} isActive={checked} />
          </div>
          <div>
            <p>Disabled : {checked ? "true" : "false"}</p>
            <Checkbox
              disabled
              color="dark"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
        </div>
        {/* --------- */}
        <div className="App__section">
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="primary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="secondary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="tertiary"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="success"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="danger"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="warning"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="light"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="medium"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Is checked : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              color="dark"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
          <div>
            <p>Disabled : {checked ? "true" : "false"}</p>
            <Checkbox
              type="outline"
              disabled
              color="dark"
              setActive={setChecked}
              isActive={checked}
            />
          </div>
        </div>
      </div>
      <br />
      <hr />
      {/* --------------- RADIO BUTTONS ---------------- */}
      <div className="App__container">
        <div className="App__section">
          <div>
            <Radio
              name="radioSize"
              value="radio"
              color="primary"
              isActive={radio}
              setActive={setRadio}
              size="sm"
            />
          </div>
          <div>
            <Radio
              name="radioSize"
              value="radio2"
              color="secondary"
              isActive={radio}
              setActive={setRadio}
              size="md"
            />
          </div>
          <div>
            <Radio
              name="radioSize"
              value="radio3"
              color="tertiary"
              isActive={radio}
              setActive={setRadio}
              size="lg"
            />
          </div>
        </div>
        <br />
        <div className="App__section">
          <div>
            <Radio
              name="radio"
              value="radio"
              color="primary"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio2"
              color="secondary"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio3"
              color="tertiary"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio4"
              color="success"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio5"
              color="danger"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio6"
              color="warning"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio7"
              color="light"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio8"
              color="medium"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
          <div>
            <Radio
              name="radio"
              value="radio9"
              color="dark"
              isActive={radio}
              setActive={setRadio}
            />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default ComponentsPage;
