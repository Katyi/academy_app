import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Rocket, TriangleAlert } from 'lucide-react';

interface AlertBannerProps {
  isCompleted: boolean;
  requiredFieldsCount: number;
  missingFieldsCount: number;
}

const AlertBanner = ({
  isCompleted,
  requiredFieldsCount,
  missingFieldsCount,
}: AlertBannerProps) => {
  return (
    <Alert
      className="my-4"
      variant={`${isCompleted ? 'complete' : 'destructive'}`}
    >
      {isCompleted ? (
        <Rocket className="h-4 w-4" />
      ) : (
        <TriangleAlert className="h-4 w-4" />
      )}
      <AlertTitle className="text-xs font-medium">
        отсутствуют {missingFieldsCount} из {requiredFieldsCount} обязательных
        полей
      </AlertTitle>
      <AlertDescription className="text-xs">
        {isCompleted
          ? 'Отличная работа! Готово к публикации.'
          : 'Вы сможете опубликовать только после заполнения всех обязательных полей.'}
      </AlertDescription>
    </Alert>
  );
};

export default AlertBanner;
