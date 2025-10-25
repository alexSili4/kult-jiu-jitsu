interface IGetFlexItemWidthProps {
  listLength: number;
  listGap: number;
}

const getFlexItemWidth = ({
  listLength,
  listGap,
}: IGetFlexItemWidthProps): string => {
  const gapsNumber = listLength - 1;
  const totalGap = `${gapsNumber * listGap}px`;

  return `(100% - ${totalGap}) / ${listLength}`;
};

export default getFlexItemWidth;
