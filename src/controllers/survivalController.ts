import { Request, Response } from "express";
import { SurvivalSimulation } from "../services/survivalService";
import { ErrorHandler } from "../utils/errorHandler";
import { simulateSurvivalParseInput } from "../utils/parse";

const simulationService = new SurvivalSimulation();

export const simulateSurvival = (req: Request, res: Response) => {
  try {
    const inputText: string = req.body.inputText;

    const { hero, enemies, resourceDistance }= simulateSurvivalParseInput(inputText);
  
    const result = simulationService.simulate({
      hero,
      enemies,
      resourceDistance,
    });

    res.json({ result });
  } catch (error) {
    ErrorHandler.handleError(error as ErrorHandler, res);
  }
};
