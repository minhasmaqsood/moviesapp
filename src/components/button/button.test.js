import 'react-native';
import React from 'react';
import Button from './Button'
import { render,act, fireEvent } from "@testing-library/react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


let component;
const title="button"
const disabled=false
const onPress = jest.fn();


beforeEach(() => {
    component = render(
      <SafeAreaView>
          <Button title={title} disabled={disabled} onPress={onPress}/>
      </SafeAreaView>
    )
  });

  describe("<Buttob /> component test cases", () => {
    test("if Button component renders correctly", () => {
      const { getByTestId } = component;
      const rating = getByTestId(/customButton/i);
      expect(rating).toBeTruthy();
    });

    test("if onSelection functionality works correctly works correctly", async () => {
        const { getByTestId } = component;
        const button = getByTestId(/customButton/i);
        await act(async () => {
          await fireEvent.press(button);
        });
        expect(onPress).toHaveBeenCalled();
      });
  });