import { exceptionsID } from "@bevi-icon/data/listOfExceptions";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";

const EXCEPTION_VARIANT = "solid" as VariantType;
const EXCEPTION_WEIGHT = 600 as WeightType;

// type ResolveIconExceptionResult = {
//   iconID: string,
//   variant: VariantType;
//   weight: WeightType,
//   isExeption: boolean
// };

export const resolveIconException = (
	iconID: string,
	variant: VariantType,
	weight: WeightType,
	isExeption: boolean,
) => {
	if (exceptionsID.has(iconID)) {
		return {
			variant: EXCEPTION_VARIANT,
			weight: EXCEPTION_WEIGHT,
			isExeption: true,
		};
	}
	return { variant, weight, isExeption };
};
